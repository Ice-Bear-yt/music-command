module.exports = ({
  name: "np",
  code: `$title[$songInfo[title]]
  $addField[URL:;$songInfo[url]]
  $addField[Duration:;$songInfo[duration]]
  $addField[Added by:;$userTag[$songInfo[userID]]]
  $footer[]
  $addTimestamp
  $color[$random[0;999999]]`
})
