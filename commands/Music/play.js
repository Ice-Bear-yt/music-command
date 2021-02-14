module.exports = ({
  name: "play",
  code: `$title[Added to queue: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;title;]]
  $addField[Duration:;$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration;];no]
  $addField[Added por:;$userTag[$authorID];no]
  $addField[URL:;$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;url;];no]
  $thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail;]]
  $playSong[$message;:x:** | The song was not found**]
  $footer[]
  $addTimestamp
  $color[$random[0;999999]]`
})
