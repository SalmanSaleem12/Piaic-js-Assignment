make_album = (artist, title, track) => {
    dic = {
        "Artist-Name ": artist,
        "Album-Title": title,
        "No Of Tracks": track,
    }
    return dic
}

console.log(make_album("Arjit Singh", "Naat", "5"));
console.log(make_album("Atif Aslam", "Bollywood Songs", "10"));
console.log(make_album("Honey Singh", "Hip-Hop", "13"));