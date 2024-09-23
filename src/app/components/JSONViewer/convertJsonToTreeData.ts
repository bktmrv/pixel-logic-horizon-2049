import type { JsonData, TreeNode } from './types'

function isExpandable(value: unknown) {
  return typeof value === 'object' && value !== null
}

function toString(value: unknown) {
  return (typeof value !== 'object' && typeof value !== 'undefined') ||
    value === null
    ? String(value)
    : ''
}

// TODO(mbektimirov): move to Worker to optimize big jsons parsing
export const convertJsonToTreeData = (
  json: JsonData,
  rootLabel = 'root',
): TreeNode[] => {
  const convert = (obj: JsonData, path = ''): TreeNode[] => {
    if (Array.isArray(obj)) {
      return obj.map((arrayValue, arrayIndex) => {
        const currentPath = path ? `${path}.${arrayIndex}` : String(arrayIndex)

        if (isExpandable(arrayValue)) {
          return {
            value: currentPath,
            label: arrayIndex,
            children: convert(arrayValue, currentPath),
            nodeProps: { key: String(arrayIndex) },
          }
        }

        return {
          value: currentPath,
          label: `${arrayIndex}: ${arrayValue}`,
          nodeProps: { key: String(arrayIndex), value: toString(arrayValue) },
        }
      })
    }

    return Object.entries(obj).map(([key, value]) => {
      const currentPath = path ? `${path}.${key}` : key
      const expandable = isExpandable(value)

      return {
        value: currentPath,
        label: expandable ? key : `${key}: ${value}`,
        children: expandable ? convert(value, currentPath) : undefined,
        nodeProps: { key, value: toString(value) },
      }
    })
  }

  // wrap everything into an entry point root section
  return [
    {
      label: rootLabel,
      value: rootLabel,
      children: convert(json),
      nodeProps: { key: 'root' },
    },
  ]
}
