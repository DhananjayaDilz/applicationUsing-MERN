module.  exports=(req,res)=>{
    let baseUrl=req.url.substring(0,req.url.lastIndexOf("/")+1);
    console.log(baseUrl)
    let id=req.url.split("/")[3];
    console.log(id);
    const regexV4 = new RegExp(
        /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
      );
    if (req.url==="/api/movies") {
        res.statusCode=200;
        res.setHeader("Content-Type","application/json");
        res.write(JSON.stringify(req.movies));
        res.end();
    } else if(!regexV4.test(id)){
        res.statusCode=400;
        res.writeHead(404,"validation faild");
        res.end(JSON.stringify({title:"validation fail", message:"UUID is not a valid"}));
       
    } else if(baseUrl==="/api/movies/" &&regexV4.test(id)){
        res.setHeader("content-type", "application/json");
        let filteredMovie = req.movies.filter((movie)=>{
            return movie.id===id;
        });

        if (filteredMovie.length >0) {
            res.statusCode = 200;
            res.write(JSON.stringify(filteredMovie));
            res.end();
        }else {
            res.statusCode = 404;
            res.writeHead(404,"not found");
            res.end(JSON.stringify({title:"Not Found", message:"movie Not Found"}));
        }
    }
    else{
        res.statusCode=404;
                res.writeHead(404,"not found");
                res.end(JSON.stringify({title:"Not Found", message:"route Not Found"}));
               
    }
};