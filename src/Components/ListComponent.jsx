import React from 'react'

const ListComponent = ({ hName, hAdd, hPhone, hImageUrl, hLatitude, hLongitude, hOpenTime, hCloseTime, setHOpenTime, setHCloseTime, setHName, setHAdd, setHPhone, setHImageUrl, setHLatitude, setHLongitude, setMap }) => {

    let hospitalList = [
        { hospitalName: "medical", hospitalAddress: "medical college, tilwara", hospitalPhone: "1234567890", hospitalOpenTime: "8AM", hospitalCloseTime: "11pm", hospitalLatitude: "23.149401", hospitalLongitude: "79.882004", hospitalImageUrl: "https://th.bing.com/th/id/AQcJQsVJXYN5yCw480x360?&rs=1&pid=ImgDet" },

        { hospitalName: "metro", hospitalAddress: "metro hospital, damoh naka", hospitalPhone: "0987654321", hospitalOpenTime: "8AM", hospitalCloseTime: "11pm", hospitalLatitude: "23.186487", hospitalLongitude: "79.928879", hospitalImageUrl: "https://content3.jdmagicbox.com/comp/jabalpur/a9/9999px761.x761.101029234156.u8a9/catalogue/metro-hospital-and-cancer-research-centre-damoh-naka-jabalpur-hospitals-qohmrmj.jpg" },
    ];

    const showHospitalDetails = (hospital__name, hospital__add, hospital__phone, hospital__image, hospital__longitude, hospital__latitude, hospital__open__time, hospital__close__time) => {
        setHName(hospital__name);
        setHAdd(hospital__add);
        setHPhone(hospital__phone);
        setHImageUrl(hospital__image);
        setHLongitude(hospital__longitude);
        setHLatitude(hospital__latitude);
        setHOpenTime(hospital__open__time);
        setHCloseTime(hospital__close__time);
    };

    const renderList =
        hospitalList.map((results, index) => {
            const {
                hospitalName,
                hospitalPhone,
                hospitalAddress,
                hospitalLatitude,
                hospitalLongitude,
                hospitalImageUrl,
                hospitalOpenTime,
                hospitalCloseTime
            } = results; //destructuring

            return (
                <div className="listItemContainer" key={index} style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                }}>
                    <img height={50} width={50} src={hospitalImageUrl} alt="hospital__image" />
                    <p className="hospital__name">{hospitalName}</p>
                    <p className="hospital__phone">{hospitalPhone}</p>
                    <p className="hospital__add">{hospitalAddress}</p>
                    <p className="hospital__open__time">{hospitalOpenTime}</p>
                    <p className="hospital__close__time">{hospitalCloseTime}</p>
                    <button className='btn btn-primary hospital__view__location' onClick={() => showHospitalDetails(hospitalName, hospitalPhone, hospitalAddress, hospitalImageUrl, hospitalLongitude, hospitalLatitude, hospitalOpenTime, hospitalCloseTime)} data-bs-toggle="modal" data-bs-target="#view__details" >View Details</button>
                </div>
            )

        });

    return (
        <div className='listComponent' >
            {renderList}
            <div className="modal fade" id="view__details" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{hName}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        {hAdd}{hPhone}{hImageUrl}{hLatitude}{hLongitude}{hOpenTime}{hCloseTime}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => setMap("map")}>View Location</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListComponent