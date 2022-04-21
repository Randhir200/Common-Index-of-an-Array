function runProgram(input) {
    input = input.trim().split('\n');
    var tc = +input[0];
    var line = 1;
    for (var i = 0; i < tc; i++) {
      var n = +input[line];
      line++;
      var arr1 = input[line].trim().split(' ').map(Number);
      line++;
      var m = +input[line];
      line++;
      var arr2 = input[line].trim().split(' ').map(Number);
      line++
      // 1 2 3 4 5 6, 3 3 5   
      var start1=0
      var start2=0
      var bag="";
          // console.log(n,m,arr1,arr2);
      while(start1<n&&start2<m){ 
          if(arr1[start1]==arr2[start2]){
              bag+=arr1[start1]+" ";
              start1++;
              start2++;
          }else if(arr1[start1]<arr2[start2]){
              start1++;
          }else{
              start2++;
          }
      }
      bag?console.log(bag):console.log(-1);
    }
  }
  if (process.env.USER === '') {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding('ascii');
    let read = '';
    process.stdin.on('data', function (input) {
      read += input;
    });
    process.stdin.on('end', function () {
      read = read.replace(/\n$/, '');
      read = read.replace(/\n$/, '');
      runProgram(read);
    });
    process.on('SIGINT', function () {
      read = read.replace(/\n$/, '');
      runProgram(read);
      process.exit(0);
    });
  }
  