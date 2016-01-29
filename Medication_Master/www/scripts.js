function addRow() {
    var newRowNum = $("#list tbody").children().length - 1;
    
    var newRow = $("#list tbody tr:nth-child(2)").first().clone();
    newRow.find("medicine0").attr("name","medicine[" + newRowNum + "]");
    newRow.find("medicine0").attr("id","medicine" + newRowNum);
    newRow.find("#monday0").attr("name","monday[" + newRowNum + "]");
    newRow.find("#monday0").attr("id","monday" + newRowNum);
    newRow.find("#tuesday0").attr("name","tuesday[" + newRowNum + "]");
    newRow.find("#tuesday0").attr("id","tuesday" + newRowNum);
    newRow.find("#wednesday0").attr("name","wednesday[" + newRowNum + "]");
    newRow.find("#wednesday0").attr("id","wednesday" + newRowNum);
    newRow.find("#thursday0").attr("name","thursday[" + newRowNum + "]");
    newRow.find("#thursday0").attr("id","thursday" + newRowNum)
    newRow.find("#friday0").attr("name","friday[" + newRowNum + "]");
    newRow.find("#friday0").attr("id","friday" + newRowNum);
    newRow.find("#saturday0").attr("name","saturday[" + newRowNum + "]");
    newRow.find("#saturday0").attr("id","saturday" + newRowNum);
    newRow.find("#sunday0").attr("name","sunday[" + newRowNum + "]");
    newRow.find("#sunday0").attr("id","sunday" + newRowNum);
    newRow.find("#morning0").attr("name","morning[" + newRowNum + "]");
    newRow.find("#morning0").attr("id","morning" + newRowNum);
    newRow.find("#lunch0").attr("name","lunch[" + newRowNum + "]");
    newRow.find("#lunch0").attr("id","lunch" + newRowNum);
    newRow.find("#evening0").attr("name","evening[" + newRowNum + "]");
    newRow.find("#evening0").attr("id","evening" + newRowNum);
    
    newRow.appendTo($("#list tbody"));
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
            medicine[i].days[j] = $("#list tbody tr:nth-child(" + i+1 + ") :checkbox")[j].checked;
        }
        for(j=7;j<10;j++)
        {
            medicine[i].times[j] = $("#list tbody tr:nth-child(" + i+1 + ") :checkbox")[j].checked;
        }
        console.log(medicine[i].name);
        console.log(medicine[i].days);
        console.log(medicine[i].times);
    }
}

function Medicine(name)
{
    this.name = name;
    this.days = new Array(7);
    this.times = new Array(3);
}