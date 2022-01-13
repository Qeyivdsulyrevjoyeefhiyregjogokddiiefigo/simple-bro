exports.owner = (botname) =>{
	return`  Cmd for owner ! ${botname}`
	}
exports.admin = (groupName) =>{
	return` Cmd for admin ! ${groupName}`
	}
exports.adminB = () =>{
	return` Im not admin !`
	}
exports.err = () =>{
	return` Feature eror !`
	}
exports.group = () =>{
	return` Cmd for group !`
	}

exports.wait = () =>{
	return`⏳ Wait for second ~`
	}
exports.ok = () =>{
	return` Done ! ~`
	}
exports.welcome = () =>{
	return`Konnichiwa!
⌯ָ   ֙Nama :
⌯ָ   ֙Umur :
⌯ָ   ֙Favorit :
⌯ָ   ֙Askot :
`
      }
exports.leave = () =>{
	return`
Sayonara`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *List Menu*
│
├ *Download*
│ • ${prefix}play [query]
│ • ${prefix}pinterest [query]
│ • ${prefix}ytmp3 [url]
│ • ${prefix}ytmp4 [url]
│ • ${prefix}tiktok [url]
│ • ${prefix}tiktoknowm [url]
│ • ${prefix}tiktokwm [url]
│ • ${prefix}tiktokaudio [url]
│
├ *Convert*
│ • ${prefix}stiker [video/image]
│
├ *Owner*
│ • ${prefix}broadcast [text]
│ • ${prefix}leave
│ • >
│ • $
│ •  => 
│
├ *Group*
│ • ${prefix}hidetag [text]
│ • ${prefix}linkgrup
│ • ${prefix}tagall
│ • ${prefix}kick @tag
│ • ${prefix}setdesc [text] 
│ • ${prefix}setname [text] 
╰─⬣
`
	}
