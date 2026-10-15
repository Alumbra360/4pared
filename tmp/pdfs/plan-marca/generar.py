from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from PIL import Image
ROOT=Path('/Users/jonnathan/Documents/ChatGPT/4pared')
for n,f in [('R','Regular'),('B','Bold'),('S','SemiBold')]:pdfmetrics.registerFont(TTFont(n,str(ROOT/f'output/4pared-kit/fuentes/Inter-{f}.ttf')))
pdfmetrics.registerFontFamily('R',normal='R',bold='B')
W,H=595.28,841.89
O='#FF5000'; K='#111111'; P='#F4F2EE'; G='#606060'; D='#B93800'; WH='#FFFFFF'
OUT=ROOT/'output/pdf/4pared-plan-mensual-contenido.pdf'
c=canvas.Canvas(str(OUT),pagesize=(W,H));c.setTitle('4PARED 360 | Plan mensual de creación de contenido');c.setAuthor('4PARED 360');c.setSubject('Inversión, entregables y proceso de producción mensual');c.setViewerPreference('DisplayDocTitle','true')
def box(x,y,w,h,co,r=0):
 c.setFillColor(HexColor(co)); c.roundRect(x,H-y-h,w,h,r,fill=1,stroke=0)
def text(t,x,y,s=11,font='R',co=K):
 c.setFillColor(HexColor(co));c.setFont(font,s);c.drawString(x,H-y-s,t)
def para(t,x,y,w,s=10.4,co=G,lead=15):
 p=Paragraph(t,ParagraphStyle('p',fontName='R',fontSize=s,leading=lead,textColor=HexColor(co)));_,h=p.wrap(w,700);p.drawOn(c,x,H-y-h);return h

def line(x,y,x2,y2,co=K,sw=1):
 c.setStrokeColor(HexColor(co));c.setLineWidth(sw);c.line(x,H-y,x2,H-y2)
def circle(x,y,r,co):
 c.setFillColor(HexColor(co));c.circle(x,H-y,r,stroke=0,fill=1)
def poly(points,co):
 p=c.beginPath();p.moveTo(points[0][0],H-points[0][1]);
 for x,y in points[1:]:p.lineTo(x,H-y)
 p.close();c.setFillColor(HexColor(co));c.drawPath(p,fill=1,stroke=0)
def logo(x,y,w):
 p=ROOT/'output/4pared-kit/logos/horizontal/4pared-horizontal-color-1200px.png';im=Image.open(p);h=w*im.height/im.width;c.drawImage(str(p),x,H-y-h,w,h,mask='auto')
def icon(kind,x,y,co=K):
 c.setStrokeColor(HexColor(co));c.setLineWidth(1.5)
 if kind in ('video','micro'):
  c.roundRect(x,H-y-24,17,25,3,stroke=1,fill=0);poly([(x+6,y+7),(x+6,y+16),(x+13,y+11.5)],co)
 elif kind=='photo':
  c.roundRect(x,H-y-21,25,18,3,stroke=1,fill=0);c.circle(x+12.5,H-y-12,5,fill=0,stroke=1);line(x+7,y-3,x+18,y-3,co,2)
 elif kind=='stack':
  c.roundRect(x+5,H-y-19,20,23,2,stroke=1,fill=0);c.roundRect(x,H-y-24,20,23,2,stroke=1,fill=0)
 elif kind=='check':
  line(x,y+7,x+5,y+12,co,1.6);line(x+5,y+12,x+15,y,co,1.6)

def footer(n,t):
 line(42,790,553,790,'#DAD7D2',.7);text('4PARED 360  /  '+t,42,805,7.5,'S',G);text(f'0{n} / 02',514,803,8,'S',G)
def head(kicker):
 logo(32,24,145);text(kicker,327,42,8,'S',G)
def artwork():
 # Ilustración editorial original de los formatos de contenido.
 box(346,122,207,229,P,14)
 box(365,147,81,110,WH,5);box(372,154,67,74,'#D9D6D0',3)
 circle(421,169,7,O);poly([(372,228),(395,187),(418,222),(430,199),(439,220),(439,228)],'#77746F')
 box(373,238,48,3,K,1);box(373,245,32,3,'#CAC5BE',1)
 box(426,171,96,160,K,14);box(432,178,84,146,'#30302E',9)
 box(459,183,31,4,'#77746F',2);circle(474,238,23,O);poly([(467,226),(467,250),(487,238)],K)
 box(443,282,62,5,WH,2);box(451,292,47,4,WH,2)
 box(344,294,67,36,O,5);icon('stack',357,302,K)
 text('CONTENIDO CON IDENTIDAD',360,364,7.3,'S',G)
head('PLAN MENSUAL / CONTENIDO')
c.bookmarkPage('oferta');c.addOutlineEntry('Inversión y entregables','oferta')
text('Tu marca,',42,101,34,'B');text('en contenido.',42,142,34,'B')
para('Creamos contenido alineado con la identidad de tu marca para que lo compartas en tus redes sociales.',42,201,275,11.4,K,17)
text('$200',40,274,43,'B');text('/ mes',177,303,12,'S');text('Sin incluir impuestos',43,329,10,'R',G)
artwork()
box(42,390,511,65,K,8)
para('<b>Pago al inicio de cada mes</b>, desde el primer mes de contratación.',58,405,282,10,WH,15)
line(360,405,360,440,'#555555',.7);text('PLAZO MÍNIMO',379,403,8,'S','#CCCCCC');text('Un año',379,421,16,'B',WH)
text('Tus entregables cada mes',42,477,19,'B')
items=[('8','Reels','De 1 a 2 minutos','video'),('4','Micro reels','Menos de 30 segundos','micro'),('3','Fotografías','Profesionales','photo'),('2','Carruseles','4 láminas cada uno','stack')]
for i,(n,t,d,ic) in enumerate(items):
 x=42+(i%2)*263;y=515+(i//2)*91
 box(x,y,248,79,P,8);text(n,x+15,y+9,32,'B');icon(ic,x+204,y+16,D);text(t,x+62,y+15,12,'B');text(d,x+62,y+37,9.3,'R',G)
text('Cada video incluye',42,712,10.5,'B');para('Grabación, edición, música, subtítulos y textos en pantalla.',42,731,500,10.2,K,15)
para('No se incluyen descripciones para acompañar las publicaciones.',42,753,500,9.3,G,14)
footer(1,'INVERSIÓN Y ENTREGABLES');c.showPage()
head('PLAN MENSUAL / PROCESO')
c.bookmarkPage('proceso');c.addOutlineEntry('Producción, entrega y requisitos','proceso')
text('Así trabajamos cada mes',42,100,26,'B')
para('Una sesión de producción. Entregas progresivas. Un proceso claro.',42,140,510,10.6,G,16)
# Secuencia de preparación y sesión.
for num,y,title,body in [
 ('01',183,'Preparamos los guiones y textos','El cliente proporciona los <b>guiones una semana antes de la grabación</b>, además de los textos para los carruseles. Nuestro equipo los revisa y aporta observaciones para mejorar su claridad y facilitar la producción.'),
 ('02',293,'Producimos en una sesión mensual','Incluye <b>hasta 5 horas</b> de grabación y fotografía en una ubicación indicada por el cliente dentro de <b>Cuenca</b>. La sesión fotográfica se realiza fuera de estudio.')]:
 box(42,y,32,29,O,5);text(num,49,y+6,11,'B');text(title,87,y+1,13,'B');para(body,87,y+27,464,10.2,K,15)
para('Si es necesario ampliar la sesión, las condiciones se coordinarán previamente.',87,373,463,9.5,G,14)
text('Entrega y cambios incluidos',42,415,18,'B')
para('Recibes el contenido progresivamente en una carpeta en la nube.',42,444,511,10.4,G,15)
for x,title,big in [(42,'PRIMERAS PIEZAS','A partir de una semana'),(305,'ENTREGA COMPLETA','En un plazo de 10 días')]:
 box(x,475,248,88,P,7);box(x,475,248,3,O)
 text(title,x+14,488,8,'S',D);text(big,x+14,510,12,'B');text('después de finalizar las grabaciones',x+14,533,8.5,'R',G)
para('Cada pieza incluye <b>hasta dos cambios de postproducción</b> sobre el material producido.',42,578,511,10.3,K,15)
para('<b>Publicación:</b> el cliente se encarga de publicar el contenido en sus redes sociales.',42,615,511,10.3,K,15)
box(42,657,511,111,K,8);text('Para comenzar',58,669,15,'B',WH)
para('Debes contar con una <b>marca e identidad visual definidas</b> y proporcionar:',58,696,477,9.7,WH,14)
icon('check',59,722,O);para('Manual de marca básico y recursos gráficos disponibles.',81,720,450,9.5,WH,13)
icon('check',59,742,O);para('Público objetivo, propuesta de valor y posicionamiento.',81,740,450,9.5,WH,13)
footer(2,'PRODUCCIÓN Y CONDICIONES');c.save()
print(OUT)
