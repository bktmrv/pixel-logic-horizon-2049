'use client'

import { type FC, useEffect, useState } from 'react'
import { Loader, Tree, type TreeNodeData, useTree } from '@mantine/core'
import type { TreeNode } from '@/app/components/JSONViewer/types'
import { convertJsonToTreeData } from '@/app/components/JSONViewer/convertJsonToTreeData'
import { HoverActions } from './HoverActions'
import { roboto } from '@/app/fonts'
import { ExpandButton, IconTextType } from './controls'

interface JSONViewerProps {
  data: string
  rootLabel?: string
  onValueCopy?(value: string): void
}

export const JSONViewer: FC<JSONViewerProps> = ({
  data,
  rootLabel = 'root',
  onValueCopy,
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [treeData, setTreeData] = useState<TreeNode[]>([])
  const [error, setError] = useState('')
  const tree = useTree()

  const onNodeClick = (node: TreeNodeData) => {
    navigator.clipboard
      .writeText(node.value)
      .then(() => onValueCopy?.(node.value))
  }

  useEffect(() => {
    try {
      setError('')

      const parsedJson = JSON.parse(data)

      setTreeData(convertJsonToTreeData(parsedJson))
      setIsLoading(false)
    } catch {
      setError('Failed to parse JSON from provided data.')
    }

    tree.expand(rootLabel)
  }, [setTreeData, data])

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-48">
        <Loader size="lg" />
        <p className="mt-4 text-base text-gray-600">Converting JSON data...</p>
      </div>
    )
  }

  if (error) {
    return <h1 className="text-red-600">{error}</h1>
  }

  return (
    <Tree
      data={treeData}
      tree={tree}
      className="h-full overflow-y-auto text-xxs"
      levelOffset="lg"
      renderNode={({ level, node, elementProps, hasChildren, expanded }) => {
        const isFirstLevel = level === 1
        const isHovered = elementProps['data-hovered']

        return (
          <div
            {...elementProps}
            className={`mantine-Tree-label cursor-pointer py-1 ${expanded && hasChildren ? 'pb-0' : ''}`}
            style={!isFirstLevel ? { animation: 'slideDown 0.3s' } : {}}
          >
            <div className="relative flex items-start gap-1 pl-3">
              <div>
                {hasChildren ? (
                  <ExpandButton expanded={expanded} />
                ) : (
                  <IconTextType />
                )}
              </div>

              <div className="flex items-start gap-1">
                <span className="font-medium min-w-2 break-all text-[#1F2020]">
                  {node.nodeProps?.key}{' '}
                  <span className="text-[#606061] text-wrap">
                    {node.nodeProps?.value}
                  </span>
                </span>

                {hasChildren ? (
                  <span className={`text-[#737474] ${roboto.className}`}>
                    [{node.children?.length} items]
                  </span>
                ) : null}
              </div>

              {isHovered && !hasChildren ? (
                <HoverActions
                  className="absolute left-[calc(100%-98px)]" /* TODO: calc by button client rect size */
                  onClick={() => onNodeClick(node)}
                />
              ) : null}
            </div>
          </div>
        )
      }}
    />
  )
}
