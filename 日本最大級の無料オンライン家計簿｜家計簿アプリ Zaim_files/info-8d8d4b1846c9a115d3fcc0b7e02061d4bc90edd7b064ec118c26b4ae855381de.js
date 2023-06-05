(function() {
  $(function() {
    $.blog_entry_to_html = function(entry) {
      return '<li><a href="' + entry.permalink + '" target="_blank">' + entry.title + '</a></li>';
    };
    return $.ajax({
      type: 'GET',
      url: 'https://zaim.co.jp/api/blog?from=web',
      success: function(entries) {
        var entry, html, i, len;
        $('.blog_spinner').hide();
        html = "";
        for (i = 0, len = entries.length; i < len; i++) {
          entry = entries[i];
          html += $.blog_entry_to_html(entry);
        }
        return $('.index-blog').html(html);
      }
    });
  });

}).call(this);
