import { styled } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Item = styled('li')`
display:flex;
flex-direction: column;

  width: 280px;

  position: relative;
  background: ${({theme})=>theme.palette.background.main};
  

  border-radius: 0px 0px 20px 20px;

  
  
  
    
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 336px;
    
    
    border-radius: 0px 0px 40px 40px;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    width: 288px;
    
    
  }
`;
export const BoxImg = styled('div')``;

export const Wrapper = styled('div')`
display: flex;
align-items: center;
position: absolute;
left: 0px;
top: 12px;
`;

export const Img = styled('img')`
    width: 100%;
    height:288px;
  object-fit: cover;
  display: block;
  
  }
`;

export const Cover = styled('div')`
position: relative;
border-radius: 0 14px 14px 0;
background: rgba(255, 255, 255, 0.6);
width: 158px;
height: 28px;`;


export const Label = styled('p')`
position: absolute;

top:50%;
left:20px;
transform: translate(0, -50%);

font-size: 12px;
line-height: 16px;

`;

export const FavBtn = styled('button')`
display: flex;
justify-content: center;
align-items: center;
background: rgba(255, 255, 255, 0.6);
margin:0;
border: none;
margin-left:66px;
width: 44px;
height: 44px;
border-radius: 50%;



${({ theme }) => theme.breakpoints.up('tablet')} {
margin-left:122px;
}

${({ theme }) => theme.breakpoints.up('desktop')} {
margin-left:74px;
}

`;
export const LogoAdd = styled(FavoriteBorderIcon)`
color:${({ theme }) => theme.palette.primary.main};



width: 24px;
`;

export const LogoDel= styled(FavoriteIcon)`
color:${({ theme }) => theme.palette.primary.main};


width: 24px;
`;


export const BoxInfo = styled('div')`
padding: 20px;

`;

export const BoxTitle = styled('div')`
display:flex;
align-items: center;
height: 76px;
`;

export const Title = styled('p')`


margin:0;
margin-bottom:20px;
  display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
  
  
font-weight: 700;
font-size: 28px;
line-height: 38px;
letter-spacing: -0.01em;

  
`;

export const PetInfo = styled('ul')`
list-style:none;
margin:0;
padding:0;
font-size: 16px;
line-height: 22px;
`;
export const ItemInfo = styled('li')`
padding:0;
display: flex;
position:relative;

&:not(:last-of-type) {
    margin-bottom: 8px;
  }

`;
export const NameInfo = styled('span')``;
export const ValueInfo = styled('div')`

position:absolute;
left: 90px;
flex-wrap: wrap; 

width: 150px;

overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 206px;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    width: 158px;
  }
`;

export const BoxBtn = styled('div')`
display: flex;
flex-direction: column;
justify-content: center;
flex-grow:1;
margin-left:20px;
margin-right:20px;
margin-bottom: 12px;
`;

export const CardBtn = styled('button')`
width:100%;
height: 38px;
background:${({ theme }) => theme.palette.background.main};
color:${({ theme }) => theme.palette.primary.main};
border: 2px solid ${({ theme }) => theme.palette.primary.main};
border-radius: 19px;

&:not(:last-of-type) {
    margin-bottom: 12px;
}

transition: ${({ theme }) =>
    theme.transitions.create(['border-color','background-color','color'], {
      duration: theme.transitions.duration.standard,
    })};

&:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.accent.dark};
    border-color: ${({ theme }) => theme.palette.accent.dark};
  }

  &:active {
    background-color: ${({ theme }) => theme.palette.accent.dark};
    color: ${({ theme }) => theme.palette.text.white};
    border-color: ${({ theme }) => theme.palette.accent.dark};
  }
`;

