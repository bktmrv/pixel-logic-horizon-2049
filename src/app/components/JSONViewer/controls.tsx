import { IconChevronDown, IconLetterT } from '@tabler/icons-react'

export const ExpandButton = ({ expanded }: { expanded: boolean }) => (
  <button
    type="button"
    className="flex items-center justify-center size-4 rounded hover:bg-[#F4F5F5] transition-all"
  >
    <IconChevronDown
      size={12}
      className={`${expanded ? 'rotate-0' : '-rotate-90'} transition-all`}
    />
  </button>
)

export const IconTextType = () => (
  <span className="flex items-center justify-center size-4 min-w-4 rounded border border-[#A0BFFC] bg-[#E6F2FF]">
    <IconLetterT className="text-[#0048C0] w-2" />
  </span>
)
