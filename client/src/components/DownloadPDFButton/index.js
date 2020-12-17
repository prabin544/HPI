import React, { useState, useEffect, useRef } from "react";
import { BlobProvider, Document, Page, View, Text } from '@react-pdf/renderer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DownloadPDFButton = (props) => {

    const MyDoc = (
        <Document>
            <Page>
                <View>
                    <Text>{props.patient}:</Text>
                    <Text>{props.hpi}</Text>
                </View>
            </Page>
        </Document>
    );

    return (
        <BlobProvider document={MyDoc}>
            {({ url }) => (
                <a href={url} target="_blank" className="btn btn-lg btn-outline-primary">
                    <i className="fas fa-file-download"></i> Download PDF
                </a>
            )}
        </BlobProvider>
    )

}

export default DownloadPDFButton;