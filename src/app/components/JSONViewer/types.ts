import { TreeNodeData } from '@mantine/core'

export interface TreeNode extends TreeNodeData {
  nodeProps: { key: string; value?: string }
}

export type JsonData = object | string
