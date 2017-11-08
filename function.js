class Table{
  constructor(data){
    this.data = data;
    this.headerNames = Object.keys(data[0]);
    this.headerRow = document.createElement('tr');
    this.table = document.getElementById("result");
  }
  createCell (cell){return document.createElement(cell);}
  clearTable (){this.table.innerHTML = "";}
  resetData(){
    this.data=window.data;
    table.printRows(data);
  }

  printHeader(){ 
    this.clearTable();
      this.headerNames.forEach(function(elem) {
        let headerCell = this.createCell('th');
        this.headerRow.appendChild(headerCell);
        headerCell.innerHTML = elem;
         }, this);
         this.table.appendChild(this.headerRow);
  }
  printRows(data){
    this.clearTable();
    this.printHeader();
    data.forEach(function(elem) {
      if(Object.keys(elem).length<Object.keys(data[0]).length){
        return;
      }else{let dataRow = this.createCell('tr');
        for (let key in elem) {
              if(elem[key] == null || elem[key] == undefined){elem[key] = " ";}
              let dataCell = this.createCell('td');
              dataRow.appendChild(dataCell);
              dataCell.innerHTML = elem[key];
      }
      this.table.appendChild(dataRow);
  }}, this);
  }

  searchForName(name) {
    //toLowerCase kazkodel neveikia. :(
    return data.filter((el)=>el.first_name==name);
  }

  filterByName(){
    name = document.getElementById('nameField').value;
    let x = table.searchForName(name);
        //redraw
    table.printRows(x);
  }

  sortAZ(){
    let sorted =[];
    this.data.sort((a,b)=> {
      let textA = a.first_name;
      let textB = b.first_name;
      return (textA < textB) ? sorted.push(a) : (textA > textB) ? sorted.push(b) : console.log("i have no idea what case is this");
    });
    //remove duplicates.???
    let result = this.removeDuplicates(sorted, "first_name");
    table.printRows(result);
  }

  removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject  = {};

    for(var i in originalArray) {
       lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for(i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
     return newArray;
}


}//end of table class

let table = new Table(data);
table.printRows(data);




