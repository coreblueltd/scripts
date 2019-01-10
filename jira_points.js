var sum = 0;
var nw = 0;
jQuery('.aui-badge.ghx-statistic-badge[title="Story Points"]').each(function() {
  nw = parseInt(jQuery(this).text());
  if (nw > 0) sum += nw;
});
alert('Total Story Points: ' + sum);
void(document.close());
