import {filmy64} from "./base64/filmy64";
import {knizhki64} from "./base64/knizhki64";
import {komixy64} from "./base64/komixy64";
import {kontsert64} from "./base64/kontsert64";
import {nastolki64} from "./base64/nastolki64";
import {vecherinka64} from "./base64/vecherinka64";

const defaultAvatars = [
    {
        id: 1,
        src: require('./filmy.png'),
        base64: filmy64
    },
    {
        id: 2,
        src: require('./knizhki.png'),
        base64: knizhki64
    },
    {
        id: 3,
        src: require('./komixy.png'),
        base64: komixy64
    },
    {
        id: 4,
        src: require('./kontsert.png'),
        base64: kontsert64
    },
    {
        id: 5,
        src: require('./nastolki.png'),
        base64: nastolki64
    },
    {
        id: 6,
        src: require('./vecherinka.png'),
        base64: vecherinka64
    },
]

export default defaultAvatars;