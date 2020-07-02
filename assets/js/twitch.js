$('.followers').each(function() {
  var nick = $(this).data('nick');
  var span = $(this).find('span');
  $.get('https://api.twitch.tv/kraken/streams/' + nick, function(data) {
    var followers = data.stream.channel.followers;
    span.html(followers);
  });
});
