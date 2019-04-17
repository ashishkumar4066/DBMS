var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "dbms"
});

connection.connect(function(err) {
    if (err) throw err
});


var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index.html');
});
app.get('/personalInfo', (req, res) => {
    res.render("personalInfo.ejs");
});
app.get('/customer', (req, res) => {
    res.render("customer");
});
app.get('/suppliers', (req, res) => {
    res.render("suppliers");
});
app.get('/products', (req, res) => {
    res.render("products");
});
app.get('/order', (req, res) => {
    res.render("order");
});
app.get('/billingInfo', (req, res) => {
    res.render("billingInfo");
});
app.get('/supplierSuppliesProduct', (req, res) => {
    res.render("supplierSuppliesProduct");
});
app.get('/producthasOrder', (req, res) => {
    res.render("producthasOrder");
});
app.post('/submit', urlencodedParser, function(req, res) {
    console.log("Im here");
    console.log("connected");
    var sql = "INSERT INTO `personal_info` (`pid`,`email`,`phone`,`city`,`house_no`,`zipcode`,`country`) VALUES ('" + req.body.pid + "', '" + req.body.email + "','" + req.body.phone + "','" + req.body.city + "','" + req.body.house_no + "','" + req.body.zipcode + "','" + req.body.country + "')";
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("table created");
    });

    res.redirect('/');
});

app.post('/submit1', urlencodedParser, function(req, res) {
    console.log("Im here");
    console.log("connected");
    var sql = "INSERT INTO `customer` (`cid`,`fname`,`lname`,`pid`) VALUES ('" + req.body.cid + "', '" + req.body.fname + "','" + req.body.lname + "','" + req.body.pid + "')";
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("table created");
    });

    res.redirect('/');
});

app.post('/submit2', urlencodedParser, function(req, res) {
    console.log("Im here");
    console.log("connected");
    var sql = "INSERT INTO `suppliers` (`sid`,`sfname`,`slname`,`pid`) VALUES ('" + req.body.sid + "', '" + req.body.sfname + "','" + req.body.slname + "','" + req.body.pid + "')";
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("table created");
    });
    res.redirect('/');
});

app.post('/submit3', urlencodedParser, function(req, res) {
    console.log("Im here");
    console.log("connected");
    var sql = "INSERT INTO `products` (`pr_id`,`name`,`category_id`,`category_name`,`quantity_available`,`unit_price`,`unit_on_order`) VALUES ('" + req.body.pr_id + "', '" + req.body.name + "','" + req.body.category_id + "','" + req.body.category_name + "','" + req.body.quantity_available + "','" + req.body.unit_price + "','" + req.body.unit_on_order + "')";
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("table created");
    });
    res.redirect('/');
});

app.post('/submit4', urlencodedParser, function(req, res) {
    console.log("Im here");
    console.log("connected");
    var sql = "INSERT INTO `order1` (`oid`,`o_date`,`discount`,`cid`) VALUES ('" + req.body.oid + "', '" + req.body.o_date + "','" + req.body.discount + "','" + req.body.cid + "')";
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("table created");
    });
    res.redirect('/');
});

app.post('/submit5', urlencodedParser, function(req, res) {
    console.log("Im here");
    console.log("connected");
    var sql = "INSERT INTO `billing_info` (`bill_id`,`address`,`date`,`mode_of_payment`,`oid`) VALUES ('" + req.body.bill_id + "', '" + req.body.address + "','" + req.body.date + "','" + req.body.mode_of_payment + "','" + req.body.oid + "')";
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("table created");
    });
    res.redirect('/');
});

app.post('/submit6', urlencodedParser, function(req, res) {
    console.log("Im here");
    console.log("connected");
    var sql = "INSERT INTO `supplier_supplies_product` (`sid`,`pr_id`) VALUES ('" + req.body.sid + "', '" + req.body.pr_id + "')";
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("table created");
    });
    res.redirect('/');
});

app.post('/submit7', urlencodedParser, function(req, res) {
    console.log("Im here");
    console.log("connected");
    var sql = "INSERT INTO `product_has_orders` (`pr_id`,`oid`) VALUES ('" + req.body.pr_id + "', '" + req.body.oid + "')";
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("table created");
    });
    res.redirect('/');
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});