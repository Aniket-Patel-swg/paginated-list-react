

const ListView = ({ items }: { items: unknown }) => {
    return (
        <>
            <div className="list-wrapper">
                {Array.isArray(items) && items.map((animal: any) => {
                    return (
                        <>
                            {animal.id}
                            <br />
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default ListView;