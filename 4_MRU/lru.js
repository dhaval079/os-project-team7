var res, pro;
var resource;
var noofframes;
var flagFound = 0,
  flag = 0,
  flag2 = 0;
var count = 0,
  hit = 0,
  miss = 0;
var pagefault;
var pages = [];
var frames = [];
var frameAge = [];
var resource = [];
var isLRU;
function BuildFormFields($amount) {
  // For Resorce allocation
  res = $amount;
  if (res < 0) alert("Invalid Inputs");
  var $container = document.getElementById("FormFields"),
    $item,
    $field,
    $i;
  $container.innerHTML = "";
  for ($i = 0; $i < $amount; $i++) {
    $item = document.createElement("div");
    $item.style.margin = "10px";
    $item.style.cssFloat = "left";
    $item.style.width = "50px";

    $field = document.createElement("label");
    $field.innerHTML = "Page " + ($i + 1);
    $item.appendChild($field);
    $field = document.createElement("input");
    $field.name = "Design[" + $i + "]";
    $field.type = "text";
    $field.setAttribute("class", "form-control");
    $item.appendChild($field);
    $container.appendChild($item);
  }
}

function MRU() {
  isLRU = 2;
  MAIN();
  LRU1();
  RESULTS();
}
function MAIN() {
  noofframes = document.getElementById("noofFrames").value;
  var res_form = document.resource;

  (count = 0), (hit = 0), (miss = 0);
  for (var i = 1; i <= res; i++) {
    resource[i - 1] = Number(res_form[i].value);
    pages[i - 1] = Number(res_form[i].value); //added
  }

  //added

  for (var i = 0; i < noofframes; i++) {
    frames[i] = -1;
    frameAge[i] = -1;
  }

  //
  console.log(resource);
  var form = document.Need;
  var ned = [];
  var i, j;

  //TABLE for NEED
  var tab_need = document.getElementById("tab_need");
  var row = tab_need.insertRow(0);
  var cell = row.insertCell(0);
  if (isLRU == 2) cell.innerHTML = "<b>MOST RECENTLY USED</b>";
  var pro_head = tab_need.insertRow(1);
  var cell = pro_head.insertCell(0);
  cell.innerHTML = "<b>Pages</b>";
  for (i = 1; i <= noofframes; i++) {
    cell = pro_head.insertCell(i);
    cell.innerHTML = "<b>FRAME " + i + "</b>";
  }

  cell = pro_head.insertCell(i);
  cell.innerHTML = "<b>Page Fault</b>";
}

function RESULTS() {
  var tab_alloc = document.getElementById("tab_need");
  var row = tab_alloc.insertRow(j + 3);
  var cell = row.insertCell(0);
  cell.innerHTML = "Number of Page_Falts:" + miss;
  var cell = row.insertCell(0);
  cell.innerHTML = "Number of Page_Hits:" + hit;
  var cell = row.insertCell(0);
  cell.innerHTML = "Hit ratio:" + hit + "/" + res;
}

function LRU1() {
  for (
    j = 0;
    j < res;
    j++ //no of pages
  ) {
    (flagFound = 0), (flag = 0), (flag2 = 0);
    for (i = 0; i < noofframes; i++) {
      if (frames[i] == pages[j]) {
        flagFound = 1;
        flag = 1;
        count++;
        frameAge[i] = count; //age frame
        hit++;
        pagefault = 1; //	 printf("hit ");
        break;
      }
    }

    if (flagFound == 0) {
      //if frame not found and empty frame avalible
      for (i = 0; i < noofframes; i++) {
        if (frames[i] == -1) {
          frames[i] = pages[j];
          flag = 1;
          count++;
          frameAge[i] = count;
          pagefault = 0; //  printf("miss ");
          miss++;
          break;
        }
      }
    } //FLAG FOUND ends

    if (flag == 0) {
      //if frame not found
      min = frameAge[0];
      var m = 0;
      //   for mfu
      if (isLRU == 2) {
        for (i = 0; i < noofframes; i++) {
          if (frameAge[i] > min) {
            min = frameAge[i];
            m = i;
          }
        }
      }

      frames[m] = pages[j];
      count++;
      frameAge[m] = count;
      miss++;
      pagefault = 0; //	printf("miss ");
    }
    //printing results

    var row = tab_need.insertRow(j + 2);
    var cell = row.insertCell(0);
    cell.innerHTML = "<b>P" + (j + 1) + "(" + resource[j] + ")" + "</b>";
    for (k = 0; k < noofframes; k++) {
      var cell = row.insertCell(k + 1);
      cell.innerHTML = frames[k];
    }
    var cell = row.insertCell(k + 1);
    if (pagefault == 0) cell.innerHTML = "YES";
    else cell.innerHTML = "NO";
  }
  var row = tab_need.insertRow(j + 2);
  var cell = row.insertCell(0);
  if (isLRU == 1) cell.innerHTML = "LRU RESULTS:";
  if (isLRU == 2) cell.innerHTML = "MRU RESULTS:";
}
