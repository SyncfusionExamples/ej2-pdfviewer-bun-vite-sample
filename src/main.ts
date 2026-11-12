import './style.css'

import {
    PdfViewer, Toolbar, Magnification, Navigation,
    Annotation, LinkAnnotation, ThumbnailView,
    BookmarkView, TextSelection, TextSearch,
    FormFields, FormDesigner
} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation,
    Annotation, LinkAnnotation, ThumbnailView,
    BookmarkView, TextSelection, TextSearch,
    FormFields, FormDesigner);

let pdfviewer: PdfViewer = new PdfViewer();

// Specifies the URL or path of the PDF document to be loaded.
// You can provide a remote URL or a local PDF file path.
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

// Specifies the URL of the PDFium resource files required by the PDF Viewer.
// This should point to the ej2-pdfviewer-lib folder, either from a CDN
// or a locally hosted location.
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

pdfviewer.appendTo('#PdfViewer');