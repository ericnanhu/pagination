const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  for (i = 0; i <= 99; i++) {
    await prisma.post.create({
      data: {
        title: `Post #${i}`,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit dictum aliquet. Aliquam erat volutpat. Curabitur vulputate lorem vehicula eleifend volutpat. Etiam id neque ipsum. Quisque venenatis venenatis massa sed suscipit. Vestibulum vitae ipsum accumsan, consectetur lacus sed, maximus tortor. Pellentesque in sodales tortor. Aenean semper consequat tortor at volutpat. Fusce eleifend elit nec dui commodo, non porttitor magna rhoncus. Vivamus ut rutrum lorem. Maecenas tincidunt mattis ex eu faucibus.

        Nullam fringilla augue hendrerit mi finibus dictum eget vel ex. Aliquam erat volutpat. Nam finibus dui non ipsum interdum molestie. Mauris iaculis posuere est eget euismod. Praesent eu sapien lacinia, bibendum nisl quis, rhoncus mi. Vivamus auctor vulputate sodales. Duis sed magna vitae odio dignissim posuere vitae id enim. Sed laoreet rutrum leo.
        
        Quisque ac lorem eget mauris ultrices interdum. Fusce eu libero dignissim, ullamcorper neque a, ultrices eros. Sed ultrices tempus urna, sit amet aliquam ex pretium non. Duis ultrices et ipsum non scelerisque. Nam et ante vel urna dapibus vestibulum eu tempor lectus. Nulla nec felis ut nibh volutpat viverra. Nunc velit tellus, mattis a cursus eget, ornare eget est. Maecenas aliquam elit in convallis cursus. In dolor mauris, finibus at quam ut, dignissim interdum nunc. Nulla facilisi. Cras a sodales nibh. In id felis sagittis nulla commodo sodales. Proin tortor arcu, dictum non ornare nec, condimentum nec nunc. Vivamus commodo ac lectus vitae pellentesque. Nunc at nisi sed tortor dapibus congue.
        
        Ut euismod quam massa, in convallis massa cursus et. Phasellus hendrerit malesuada diam, vitae dignissim magna elementum sit amet. Vivamus ornare nunc et sem imperdiet dignissim. Nulla consectetur sit amet magna ut malesuada. Vestibulum commodo facilisis tellus eu laoreet. Mauris dignissim, velit ut dapibus volutpat, augue metus porttitor augue, scelerisque mollis tellus nisi nec ex. Donec nisl enim, sodales in elit ac, scelerisque maximus ex. Aenean finibus erat ut leo tincidunt sagittis.
        
        Proin faucibus tempus metus, sed facilisis arcu tristique et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis imperdiet quam vel quam mollis auctor. Nulla dictum nec arcu nec auctor. Ut laoreet euismod arcu, pretium hendrerit dolor rutrum sed. Proin tincidunt tempus dictum. Aenean ut porta sem, in vehicula elit. Nullam eget pharetra ex.`,
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
