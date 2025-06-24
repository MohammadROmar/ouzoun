import { useState, useCallback } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';

export function useDropzoneImage() {
  const [image, setImage] = useState<string>();
  const [error, setError] = useState<'size' | 'type' | 'unknow'>();

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      setImage(undefined);
      setError(undefined);

      if (fileRejections.length > 0) {
        const code = fileRejections[0].errors[0].code;

        if (code === 'file-too-large') {
          setError('size');
        } else if (code === 'file-invalid-type') {
          setError('type');
        } else {
          setError('unknow');
        }

        return;
      }

      const file = acceptedFiles[0];

      if (file) {
        setImage(URL.createObjectURL(file));
      }
    },
    [],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    maxSize: 2 * 1024 * 1024,
    accept: { 'image/png': ['.png'], 'image/jpeg': ['.jpg', '.jpeg'] },
  });

  return { error, image, getRootProps, getInputProps, isDragActive, setImage };
}
