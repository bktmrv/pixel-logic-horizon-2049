import { IconCopy } from '@tabler/icons-react'
import { FC, HTMLAttributes } from 'react'

export interface HoverActionsProps extends HTMLAttributes<HTMLDivElement> {
  onClick(): void
}

export const HoverActions: FC<HoverActionsProps> = ({ onClick, ...props }) => (
  <div onClick={onClick} {...props}>
    <div className="flex gap-1">
      <button type="button" className="button size-4">
        <IconCopy size={12} />
      </button>
      <button type="button" className="button h-4 px-0.5 py-1">
        Create column
      </button>
    </div>
  </div>
)
