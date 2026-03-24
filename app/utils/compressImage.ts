export const compressImage = (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 1200; // 가로 최대 1200px 제한
        let width = img.width;
        let height = img.height;

        if (width > MAX_WIDTH) {
          height = (MAX_WIDTH * height) / width;
          width = MAX_WIDTH;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, width, height);

        // JPEG 포맷, 0.7(70%) 품질로 압축
        canvas.toBlob(
          (blob) => {
            if (blob) resolve(blob);
            else reject(new Error("이미지 압축 실패"));
          },
          "image/jpeg",
          0.7,
        );
      };
    };
    reader.onerror = (error) => reject(error);
  });
};
