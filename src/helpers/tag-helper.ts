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

function getOrderStatusTagColor(status: string) {
  switch (status) {
    case 'status-progress':
      return 'yellow'
    case 'status-delivered':
      return 'green'
    case 'status-returned':
      return 'purple'
    case 'status-cancelled':
      return 'orange'
    case 'status-invoice':
      return 'blue'
    default:
      return 'grey'
  }
}

export { getTagsList, getTag, getOrderStatusTagColor }