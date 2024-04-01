import { createEmptyNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { LuFileSignature } from 'react-icons/lu'
import { ActionButton, ActionButtonProps } from './ActionButton'

export const NewNoteButton: React.FC = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreation = async (): Promise<void> => {
    await createEmptyNote()
  }

  return (
    <ActionButton onClick={handleCreation} {...props}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
