import {useState, } from 'react';

const useModal = (bool: boolean) : [boolean, () => void] => {
  const [open, setOpen] = useState<boolean>(bool)

  const toggle = () => setOpen(!open)

  return [open ,toggle]
}

export default useModal
