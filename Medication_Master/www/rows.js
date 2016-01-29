function addRow() {
    var newRowNum = $("#list tbody").children().length - 1; //counts the number of rows
    console.log(newRowNum);
    var newRow = $("#list tbody tr:nth-child(1)").first().clone(); //Copies 2nd row
    newRow.find("#Name0").attr("name","NameyourMedication[" + newRowNum + "]"); //changes name to NameYourMedication
    newRow.find("#Name0").attr("id","Name" + newRowNum); //changes id to Name1
    newRow.find("#basic-addon0").attr("id","basic-addon" + newRowNum); //changes id to basic-addon1
    newRow.appendTo($("#list #medications"));
    console.log(("#basic-addon" + newRowNum));
    $("#basic-addon" + newRowNum).html(newRowNum + 1);
}

function save() {
    var rows = $("#list tbody").children();
    var numRows = $("#list tbody").children().length;
    var j=0;
    var medicine = Array();
    
    for (var i=0;i<numRows;i++)
    {
        var currentMedicine = $("#list tbody tr:nth-child(" + i+1 + ") input")[0].value;
        medicine[i] = new Medicine(currentMedicine);
        
        for(j=0;j<7;j++)
        {
            medicine[i].days[j] = $("#list tbody tr:nth-child(" + i+1);
        }
        for(j=7;j<10;j++)
        {
            medicine[i].times[j] = $("#list tbody tr:nth-child(" + i+1);
        }
        console.log(medicine[i].NameyourMedication);
        console.log(medicine[i].AddanImage);
        
    }
}

function Medicine(name)
{
    this.NameyourMedication = name;
    this.AddanImage = new Array(3);
}