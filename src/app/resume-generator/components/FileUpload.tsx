import { FilePond } from 'react-filepond'

export default function FileUpload() {
  return (<FilePond server={{
    process: '/api/upload',
    fetch: null,
    revert: null
  }} />)
}