     $('#excel').change(function (e) {
			var files = e.target.files; //获取文件
			   for (let i = 0; i < files.length; i++) {
			   //文件路径
                 console.log(file[i].webkitRelativePath) 
                 //文件名
                 console.log(files[i].name)
               }
      
    });
