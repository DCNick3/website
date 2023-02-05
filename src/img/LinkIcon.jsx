
function LinkIcon(props) {
    return (
        <svg
            width={20}
            height={10}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            className="ml-6 sm:ml-0"
        >
            <path
                d="M5 10c-1.417 0-2.604-.48-3.563-1.438C.48 7.604 0 6.418 0 5c0-1.417.48-2.604 1.438-3.563C2.396.48 3.583 0 5 0h3.5a.728.728 0 01.75.75.728.728 0 01-.75.75H5c-1 0-1.833.333-2.5 1S1.5 4 1.5 5s.333 1.833 1 2.5 1.5 1 2.5 1h3.5a.728.728 0 01.75.75.728.728 0 01-.75.75H5zm1.875-4.25a.728.728 0 01-.75-.75.728.728 0 01.75-.75h6.25a.728.728 0 01.75.75.728.728 0 01-.75.75h-6.25zM11.5 10a.728.728 0 01-.75-.75.728.728 0 01.75-.75H15c1 0 1.833-.333 2.5-1s1-1.5 1-2.5-.333-1.833-1-2.5-1.5-1-2.5-1h-3.5a.728.728 0 01-.75-.75.728.728 0 01.75-.75H15c1.417 0 2.604.48 3.563 1.438C19.52 2.396 20 3.583 20 5c0 1.417-.48 2.604-1.438 3.563C17.605 9.52 16.418 10 15 10h-3.5z"
                fill="#fff"
                fillOpacity={0.75}
            />
        </svg>
    );
}

export default LinkIcon;