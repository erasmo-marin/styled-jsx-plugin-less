const less = require("less");
const loopWhile = require("deasync").loopWhile;

module.exports = (css, settings) => {
    const cssWithPlaceholders = css
        .replace(
            /%%styled-jsx-placeholder-(\d+)%%/g,
            (_, id) => `styled-jsx-placeholder-${id}`
        )
        // .replace(
        //     /%%styled-jsx-placeholder-(\d+)%%/g,
        //     (_, id) => `/*%%styled-jsx-placeholder-${id}%%*/`
        // );

    let wait = true;
    let preprocessed = "";

    function resolved(result) {
        preprocessed = result;
        wait = false;
    }

    less.render(cssWithPlaceholders, settings).then(function (output) {
        resolved(output.css);
    }).catch(function (error) {
        resolved("");
        console.log(error);
    });

    loopWhile(() => wait);

    return preprocessed
        .replace(
            /styled-jsx-placeholder-(\d+)/g,
            (_, id) => `%%styled-jsx-placeholder-${id}%%`
        )
        // .replace(
        //     /\/\*%%styled-jsx-placeholder-(\d+)%%\*\//g,
        //     (_, id) => `%%styled-jsx-placeholder-${id}%%`
        // );
};
