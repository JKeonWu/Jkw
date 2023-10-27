function requestAPI(url, method) {
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json",
    async: false,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDQ3ZWUyZWNkZmMxMGNkMTkwYWE1ZjM1MjUyYjJiZiIsInN1YiI6IjY1MzIzNDc0NDgxMzgyMDBjNWUzZmFjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VVxm6AdErul39epBHyu7zBz_HlJFSyb6UZ4WNgq4S_s",
    },
    success: function (data) {
      method(data);
    },
    fail: function (data) {},
    complete: function (data) {},
  });
}
