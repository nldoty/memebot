module.exports = {
    strip: function (content) {
        return content.replace(/<[^>]*>/g, "");
    }
}
