from fpdf import FPDF
# Crear el PDF replicando el diseño de la imagen con mayor fidelidad
pdf = FPDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()
pdf.set_font("Arial", size=10)

# Encabezado centrado
pdf.set_font("Arial", style='B', size=14)
pdf.cell(200, 10, "TALLER ORDEN DE TRABAJO", ln=True, align='C')
pdf.ln(5)

# Datos en columnas como en la imagen
pdf.set_font("Arial", size=10)

datos_en_columnas = [
    ("No. Orden Trab.:", "796", "DNI/CUIT:", "43777022"),
    ("Titular:", "REGGIARDO FRANCO", "Telefono:", "1130201825"),
    ("Modelo:", "ROUSER NS150", "Patente:", "A035MSF"),
    ("Kilometraje:", "37545", "Carga Bateria:", "0,00"),
    ("Fecha Ingreso:", "22/02/2025", "Fecha Fin:", "05/03/2025"),
    ("Cliente:", "CONSUMIDOR FINAL", "", ""),
    ("Detalle:", "..", "Seña:", ""),
]

col1_width = 40
col2_width = 50
col3_width = 40
col4_width = 50

for fila in datos_en_columnas:
    pdf.cell(col1_width, 7, fila[0], border=0, align='L')
    pdf.cell(col2_width, 7, fila[1], border=0, align='L')
    pdf.cell(col3_width, 7, fila[2], border=0, align='L')
    pdf.cell(col4_width, 7, fila[3], border=0, align='L')
    pdf.ln()

pdf.ln(5)

# Encabezado de la tabla
pdf.set_font("Arial", style='B', size=10)
pdf.cell(35, 7, "COD.", border=1, align='C')
pdf.cell(95, 7, "ARTICULO", border=1, align='C')
pdf.cell(15, 7, "CANT.", border=1, align='C')
pdf.cell(25, 7, "EFECTIVO", border=1, align='C')
pdf.cell(25, 7, "CREDITO", border=1, align='C')
pdf.ln()

# Contenido de la tabla replicando formato
pdf.set_font("Arial", size=10)
articulos = [
    ("JL181203", "MÁSCARA DE ÓPTICA", "1.00", "25000", "0.00"),
    ("JF151018", "HORQUILLA DELANTERA COMPLETA", "1.00", "586600", "0.00"),
    ("JG161008", "MANIJA EMBRAGUE", "1.00", "11500", "0.00"),
    ("JL231600", "ESPEJO IZQ", "1.00", "18000", "0.00"),
    ("JL231601", "ESPEJO DER", "1.00", "18000", "0.00"),
    ("52JF0081", "COLIN ROJO", "1.00", "211600", "0.00"),
    ("JL151034", "SEMI MANILLAR DERECHO", "1.00", "36600", "0.00"),
    ("JL401006", "GIRO DELANTERO IZQ", "1.00", "25000", "0.00"),
    ("JL401005", "GIRO DELANTERO DER", "1.00", "25000", "0.00"),
]

for cod, articulo, cant, efectivo, credito in articulos:
    pdf.cell(35, 7, cod, border=1, align='C')
    pdf.cell(95, 7, articulo, border=1, align='L')
    pdf.cell(15, 7, cant, border=1, align='C')
    pdf.cell(25, 7, efectivo, border=1, align='C')
    pdf.cell(25, 7, credito, border=1, align='C')
    pdf.ln()

# Guardar el archivo final replicando el diseño original
pdf_path_final = "/mnt/data/orden_trabajo_final.pdf"
pdf.output(pdf_path_final)

pdf_path_final
