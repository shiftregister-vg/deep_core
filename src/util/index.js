const processTextForIcons = (text) => {
  if (text) {
    const pattern = /__(\w+)__/g
    return text.replace(
      pattern,
      '<i class="xwing-miniatures-font xwing-miniatures-font-$1"></i>'
    )
  }

  return text
}

export {
  processTextForIcons
}
