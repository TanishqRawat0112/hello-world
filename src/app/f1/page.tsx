import Link from "next/link";

export default function Folder1(){
    return (
        <>
            <h1>Folder 1</h1>
            <div>
                <Link href="/f1/f2">F2 Folder</Link>
            </div>
        </>
    )
}