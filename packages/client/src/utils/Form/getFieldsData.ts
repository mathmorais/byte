export const getFieldsData = (refs: object) => {
  const refsKeys = Object.keys(refs)
  const filtredKeys = refsKeys.filter(item => item !== 'confirmPassword')
  let fields = {}

  filtredKeys.forEach(item => {
    const input = refs[item].current

    fields = { ...fields, [item]: input.value }
  })

  return fields
}
