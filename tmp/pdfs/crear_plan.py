from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pathlib import Path
F='/Users/jonnathan/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/libreoffice-headless/libreoffice/LibreOfficeDev.app/Contents/Resources/fonts/truetype/'
for name,file in [('Sans','DejaVuSans.ttf'),('Bold','DejaVuSans-Bold.ttf')]: pdfmetrics.registerFont(TTFont(name,F+file))
pdfmetrics.registerFontFamily('Sans',normal='Sans',bold='Bold')
OUT='output/pdf/plan-mensual-creacion-contenido.pdf'
W,H=595.28,841.89
c=canvas.Canvas(OUT,pagesize=(W,H))
c.setTitle('Plan mensual de creación de contenido'); c.setAuthor(''); c.setSubject('Entregables, inversión y condiciones del servicio')
ink='#172D32'; muted='#52666A'; teal='#007C73'; cream='#F7F8F4'; line='#DCE4DF'
def box(x,y,w,h,color,r=0):
 c.setFillColor(HexColor(color)); c.setStrokeColor(HexColor(color)); c.roundRect(x,H-y-h,w,h,r,fill=1,stroke=0)
def text(t,x,y,size=11,font='Sans',color=ink):
 c.setFillColor(HexColor(color)); c.setFont(font,size); c.drawString(x,H-y-size,t)
def para(t,x,y,w=499,size=10.4,color=muted,leading=15):
 p=Paragraph(t,ParagraphStyle('p',fontName='Sans',fontSize=size,leading=leading,textColor=HexColor(color)))
 _,h=p.wrap(w,700); p.drawOn(c,x,H-y-h); return h

def footer(n,label):
 box(48,793,499,0.7,line); text('PLAN MENSUAL  /  '+label,48,806,8,color=muted); text(f'{n} / 2',521,806,8,color=muted)
def section(num,title,y):
 text(num,48,y,10,'Bold',teal); text(title,77,y-2,16,'Bold')

box(0,0,W,H,'#FFFFFF'); box(48,44,30,4,teal)
text('CONTENIDO PARA REDES SOCIALES',48,64,9,'Bold',teal)
text('Plan mensual de',48,88,30,'Bold'); text('creación de contenido',48,126,30,'Bold')
para('Creamos contenido alineado con la identidad de tu marca para que lo compartas en tus redes sociales.',48,179,475,11.5,leading=17)
box(48,236,499,140,ink,12)
text('INVERSIÓN MENSUAL',68,253,9,'Bold','#A3D8CB')
text('$200',68,274,39,'Bold','#FFFFFF'); text('/ mes',192,300,12,color='#FFFFFF')
text('Sin incluir impuestos',68,326,10,color='#D2E4DF')
para('Pago al inicio de cada mes,<br/>desde el primer mes de contratación.<br/><br/><b>Plazo mínimo: un año.</b>',294,266,230,10.2,'#FFFFFF',15)
section('01','Tus entregables cada mes',409)
items=[('8','Reels','De 1 a 2 minutos'),('4','Micro reels','Menos de 30 segundos'),('3','Fotografías','Profesionales'),('2','Carruseles','4 láminas cada uno')]
for i,(n,title,desc) in enumerate(items):
 x=48+(i%2)*257; y=449+(i//2)*101
 box(x,y,242,88,cream,9); text(n,x+17,y+12,32,'Bold',teal); text(title,x+68,y+18,12,'Bold'); text(desc,x+68,y+42,9)
text('Incluido en los videos',48,664,12,'Bold')
para('Grabación, edición, música, subtítulos y textos en pantalla.',48,687,499,10.5)
box(48,723,3,40,teal)
para('No se incluyen descripciones para acompañar las publicaciones. El cliente se encarga de publicar el contenido en sus redes sociales.',61,724,480,10,leading=15)
footer(1,'OFERTA Y ENTREGABLES'); c.showPage()
box(48,44,30,4,teal); text('PRODUCCIÓN Y COORDINACIÓN',48,64,9,'Bold',teal)
text('Así trabajamos cada mes',48,88,25,'Bold')
section('02','Preparación y producción',147)
text('Guiones y textos',48,185,11,'Bold')
para('El cliente proporciona los guiones <b>una semana antes de la grabación</b>, además de los textos para los carruseles. Nuestro equipo los revisa y aporta observaciones para mejorar su claridad y facilitar la producción.',48,206)
text('Una sesión mensual de hasta 5 horas',48,280,11,'Bold')
para('Incluye grabación y fotografía en una ubicación indicada por el cliente dentro de <b>Cuenca</b>. La sesión fotográfica se realiza fuera de estudio. Si es necesario ampliar la sesión, las condiciones se coordinarán previamente.',48,301)
section('03','Entrega y cambios',386)
box(48,425,242,87,cream,9); box(305,425,242,87,cream,9)
text('PRIMERAS PIEZAS',64,440,8.5,'Bold',teal); text('A partir de una semana',64,460,12,'Bold'); text('después de finalizar las grabaciones',64,484,8.5)
text('ENTREGA COMPLETA',321,440,8.5,'Bold',teal); text('En un plazo de 10 días',321,460,12,'Bold'); text('después de finalizar las grabaciones',321,484,8.5)
para('El contenido se entrega progresivamente en una carpeta en la nube.',48,529)
para('Cada pieza incluye <b>hasta dos cambios de postproducción</b> sobre el material producido.',48,561)
section('04','Requisitos para comenzar',624)
para('El cliente debe contar con una <b>marca e identidad visual definidas</b> y proporcionar:',48,659)
for i,t in enumerate(['Manual de marca básico y recursos gráficos disponibles.','Información sobre su público objetivo, propuesta de valor y posicionamiento.']):
 box(50,706+i*29,4,4,teal,2); para(t,63,700+i*29,479,10,leading=14)
footer(2,'PROCESO Y REQUISITOS'); c.save()
print(Path(OUT).resolve())
