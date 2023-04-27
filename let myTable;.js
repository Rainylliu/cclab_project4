let myTable;
let row;

function preload(){
    myTable = loadTable('sheet.csv');

}

function setup(){
    row = int(random(myTable.getRowCount()));
}

function draw(){
    Text(myTable.getString(row, 0), 50, height/2);
}

function mousePressed(){
    row = int(random(myTable.getRowCount()));
}