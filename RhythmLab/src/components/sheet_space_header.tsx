interface sheet_space_header_parameters
{
    timeDifferenceColor: string
    displayText: string
}



export default function Sheet_space_header({ timeDifferenceColor, displayText}:sheet_space_header_parameters)
{
    return(
        <>
            {/* this is the element for the header */}
            <div
                            className="Sheet_Space_Header"
                            style={{
                              backgroundColor: timeDifferenceColor,
                              textAlign: "center",
                              borderBlockStyle: "solid",
                              borderBlockWidth: 3,
                              borderBlockColor: timeDifferenceColor,
                              width: "100%",
                              color: "white",
                            }}
                          >
                            <h1> {displayText} </h1>
            </div>

        </>
    )
}