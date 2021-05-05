import React from 'react'

const Table = (props) => {
    return (
        <div className="row mt-3">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">{props.isGlobal ? "Kasus Virus Corona di Dunia" : "Kasus Virus Corona di Indonesia"}</div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>{props.isGlobal ? "Negara" : "Provinsi"}</th>
                                        <th>Positif</th>
                                        <th>Sembuh</th>
                                        <th>Meninggal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>{props.isGlobal ? "Negara" : "Provinsi"}</td>
                                        <td>1000</td>
                                        <td>1000</td>
                                        <td>1000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Table;