function getTagsList(tags: Array<any>) {
    return tags.map((tag) => {
      return {
        text: tag.Text,
        shape: tag.Shape ? tag.Shape : 'rectangular',
        color: tag.Class ? tag.Class : 'grey',
      }
    })
}

function getTag(tagText: any, tagShape: any, tagColor: any) {
    return {
    text: tagText,
    shape: tagShape ? tagShape : 'rectangular',
    color: tagColor ? tagColor : 'grey',
    }
}

export { getTagsList, getTag }