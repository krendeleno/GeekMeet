import {batman64} from "./base64/batman64";
import {germiona64} from "./base64/germiona64";
import {kharli64} from "./base64/kharli64";
import {naruto64} from "./base64/naruto64";
import {pl64} from "./base64/pl64";
import {prizrak64} from "./base64/prizrak64";

const defaultAvatars = [
    {
        id: 1,
        src: require('./betmen.png'),
        base64: batman64
    },
    {
        id: 2,
        src: require('./germiona.png'),
        base64: germiona64
    },
    {
        id: 3,
        src: require('./kharli.png'),
        base64: kharli64
    },
    {
        id: 4,
        src: require('./naruto.png'),
        base64: naruto64
    },
    {
        id: 5,
        src: require('./pl.png'),
        base64: pl64
    },
    {
        id: 6,
        src: require('./prizrak.png'),
        base64: prizrak64
    },
]

export default defaultAvatars;