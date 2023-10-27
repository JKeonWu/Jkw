let page = 1;
let totalPage = 1;
let gid = "";

$(function () {
  $(".genreBtn").click(function () {
    // let genreId = this.id
    // console.log(this.id);
    gid = this.id;
    getGenreList(page, gid);
  });

  $("#moreButton").on("click", function () {
    console.log("버튼 클릭");
    if (page < totalPage) {
      page++;
      getGenreList(page, gid);
    } else {
      $(this).hide();
    }
  });
  // getGenreList();
});
function getGenreList(page, gid) {
  console.log(gid);
  let url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&language=ko-KR&page=${page}&region=KR&with_genres=${gid}&sort_by=popularity.desc&with_original_language=ko`;
  requestAPI(url, parsingJSON);
}

function parsingJSON(json) {
  console.log(json);
  totalPage = json.total_pages;
  let results = json.results;
  let output = "";
  $.each(results, function (i, result) {
    console.log(result.title);
    let poster = result.poster_path;
    if (i % 4 == 0) {
      output += `<div class="list-line">`;
    }
    if (i % 4 <= 3) {
      output += cardOutput(poster);
    }
    if (i % 4 == 3) {
      output += `</div>`;
    }
  });

  // $(".crime div").eq(0).html(output);
  $(".modal-container").append(output);
}

function cardOutput(poster) {
  return `<div class="card">
  <a href="#" class="card-item"
    ><img
      class="card-img-top"
      src="https://image.tmdb.org/t/p/w500${poster}"
      alt="Card image"
      style="width: 100%"
  /></a>
</div>`;
}
