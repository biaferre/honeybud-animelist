type GreetProps = {
    name: string
    messageCount: number
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>Oii {props.name}, vc tem {props.messageCount} mensagens.</h2>
        </div>
    )
}