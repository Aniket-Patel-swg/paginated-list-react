

const ListView = ({ items }: { items: unknown }) => {
    return (
        <>
            <div className="list-wrapper">
                {Array.isArray(items) && items.map((cat: any) => {
                    return (
                        <>
                            {cat.id}
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default ListView;