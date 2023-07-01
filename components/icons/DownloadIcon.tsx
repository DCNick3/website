function DownloadIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={48}
      viewBox="0 -960 960 960"
      width={48}
      className={"fill-secondary hover:fill-secondary_hover"}
      {...props}
    >
      <path d="M216.413-148.521q-27.599 0-47.865-20.351-20.266-20.35-20.266-48.067v-153.713h68.131v153.761h526.935v-153.761h68.131v153.648q0 27.7-20.392 48.091-20.391 20.392-47.739 20.392H216.413ZM480-318.022l-201.609-201.37 48.979-48.739 118.565 118.804v-367.652h68.13v367.652L632.63-568.131l48.979 48.739L480-318.022Z" />
    </svg>
  );
}

export default DownloadIcon;
